import { FC, useEffect, useId, useState } from "react";
import Input from "../widgets/Input/Input";
import { Textarea, Title } from "../widgets/UI";
import Button from "../widgets/Button/button";
import { useAppDispatch, useAppSelector } from "../app/appStore";
import { addAskFetch, setError } from "../entities/AddAsk";
import SuccessComponent from "../entities/profile/ui/success/success";




const AddAsk: FC = () => {
    const id = useId()
    const [fullname, setFullname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [content, setContent] = useState<string>('')


    const dispatch = useAppDispatch()
    const { error } = useAppSelector(state => state.addAskSlice)

    useEffect(() => {
        if (error == 'Perfect') {
            setTimeout(() => {
                dispatch(setError(null))
            }, 5000)
        }
    }, [error])


    return <div>
        {error == 'Perfect' ? <SuccessComponent title="Заявка отправлена" desc="Ваша заявка будет рассмотрена в ближайшее время" /> : <>
            <Title title="Расскажите нам о вашей проблеме" />
            <Input placeholder="Введите ваше имя и фамилию" text={fullname} setText={(value: string) => { setFullname(value) }} label="Ваше имя и фамилия" />
            <Input placeholder="Введите email" text={email} setText={(value: string) => { setEmail(value) }} label="Ваш email" />
            <Textarea placeholder="Основаная суть проблемы" value={content} setValue={(value) => { setContent(value) }} styles={{ h: "200px" }} label="Расскажите нам о вашей проблеме" />
            <Button title='Отправить' styles={{ mg: "0px 15px 0px 0px", bg_color: "#0a3241", color: "#fff", width: "100%" }} onclick={() => {
                dispatch(addAskFetch({
                    id,
                    fullname,
                    email,
                    content
                }))
            }} /></>}
    </div>
}


export default AddAsk