import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICharacter, IPullInfo } from '../types';

interface IState{
    info: null | IPullInfo,
    results: ICharacter[],
    active: ICharacter | null,
    error: null | any
}
const initialState: IState = {
    info: null,
    results: [],
    active: null,
    error: null
}

export const fetchPullCharacters = createAsyncThunk(
    'fetchPullCharacters',
    async (url:string = 'https://rickandmortyapi.com/api/character/') => {
        const pull = await fetch(url)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                alert(error);
                return error;
            });
        return pull
    }    
);
export const fetchCharacter = createAsyncThunk(
    'charactersSlice',
    async (id: string) => {
        let promises: any = [];
        let episode: any = [];

        const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then( response => response.json())
            .then(json => {
                promises = json.episode.map( (url: string) => {
                    const promise = fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            episode.push(data)
                        })
                    return promise
                })
                return json
            })
            
        return await Promise.all(promises)
            .then( () => {
                data.episode = episode;
                return data
            })
    }
)

const charactersSlice = createSlice({
    name: "charactersSlice",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(
            fetchPullCharacters.fulfilled, (state, action) => {
                state.info = action.payload.info;
                state.results = action.payload.results;
                state.error = null;
            }
        );
        builder.addCase(
            fetchPullCharacters.rejected, (state, action) => {
                state.error = action.payload;
            }
        );
        builder.addCase(
            fetchCharacter.fulfilled, (state, action) => {
                state.active = action.payload;
            }
        )
    },
});

export default charactersSlice.reducer;