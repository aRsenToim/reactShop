import { AxiosError } from "axios"
import { AppDispatch } from "../../../app/appStore"
import { AddAskApi } from "../api/addAskApi"
import { IAsk } from "../model/types"
import { setError, setIsPerfect } from "../model/addAskSlice"
import { TelegramApi } from "../../../app/TelegramApi"





export const addAskFetch = (ask: IAsk) => {
    return (dispatch: AppDispatch) => {
        AddAskApi.addAsk(ask).then(() => {
            dispatch(setIsPerfect())
        }).catch((err: AxiosError | Error) => {
            dispatch(setError(err.message))
        })
        TelegramApi.sendMessage(`
            NEW ASK                
            id: ${ask.id}
            fullname: ${ask.fullname}
            email: ${ask.email}
            content: ${ask.content}
                        `).then(() => {
            dispatch(setIsPerfect())
        }).catch((err: AxiosError | Error) => {
            dispatch(setError(err.message))
        })
    }
}