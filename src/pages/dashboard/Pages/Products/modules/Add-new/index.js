import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { requests, url } from "../../../../../../api/requests";
import Kresla from "../../../../../../assets/images/IMG_4854.JPG";
import Headers from "../../../../../../Components/Headers";
import {
    ADDNEW, AddNewBox, AddNewContainer,
    AddnewInner, Body, Botton, ButtonBox, ColorDiv, Delit, Descripton,
    FooterIneer, FotterBox, Header, Image, ImageBox, ImageFotter, ImageInner, ImputBox,
    Input, InputButton, InputH, InputInner, InputNew, InputText, New, StyledInput, TextAre
} from "./style";

export default function AddNewPage() {
    const [state, setState] = useState({ characteristics: [], colors: [] });
    const myInput = useRef(null);
    const colorPreview = useRef(null)

    let onImageChange = async (e) => {
        if (e.target.files.length > 0) {
            let form = new FormData();
            form.append("files", e.target.files[0]);
            let res = await requests.file.upload(form);
            setState({ ...state, [e.target.name]: `${url}/file-download/${res.data[0]}` })
        }
    }
    let onChange = (el) => {
        let name = el.target.name
        if (name.indexOf(".") !== -1) {
            let parts = name.split(".");
            setState({
                ...state,
                [parts[0]]: {
                    ...state[parts[0]],
                    [parts[1]]: el.target.value
                }
            })
            return;
        }
        setState({ ...state, [name]: el.target.value })
    };
    useEffect(() => {
        console.log(state);
    }, [state])
    let onUpload = () => {
        myInput.current.click();
    }
    let onAddColor = () => {
        setState({ ...state, colors: [...state.colors, { name: "Color", hex: '#fff', image: '' }] })
    }
    let onDeleteColor = (e) => {
        let newColors = state.colors.filter((value, index) => e !== index)
        setState({...state,colors:newColors})
    }
    let onUploadColorPreview = () => {
        colorPreview.current.click()
    }
    let onReset = () => {
        //TODO remove from the server
        setState({ ...state, image: null })
    }
    return (
        <Body>
            <Headers />
            <Header>
                <AddNewContainer>
                    <AddnewInner>
                        <ImageBox>
                            <ImageInner>
                                <Image src={state.image ? state.image : Kresla} />
                                <InputH type={"file"} ref={e => myInput.current = e} name="image" id="image-upload" onChange={onImageChange} />
                            </ImageInner>
                            <ButtonBox>
                                <Botton onClick={onUpload}>Upload</Botton>
                                <Botton onClick={onReset}>Reset</Botton>
                            </ButtonBox>
                        </ImageBox>
                        <ImputBox>
                            <InputInner>
                                <InputText>Name</InputText>
                                <Input name="name" onChange={onChange} type="text" placeholder="Name" />
                            </InputInner>
                            <InputInner>
                                <InputText>Price</InputText>
                                <Input name="price" onChange={onChange} type="text" placeholder="Price" />
                            </InputInner>
                            <InputInner>
                                <InputText>Model</InputText>
                                <Input name="model" onChange={onChange} type="text" placeholder="Model" />
                            </InputInner>
                            <FotterBox>
                                <StyledInput name="size.width" onChange={onChange} type="text" placeholder="width" />
                                <StyledInput name="size.height" onChange={onChange} type="text" placeholder="height" />
                                <StyledInput name="size.wide" onChange={onChange} type="text" placeholder="wide" />
                            </FotterBox>
                        </ImputBox>
                    </AddnewInner>
                    <InputText>Characteristics</InputText>
                    <FotterBox>
                        <StyledInput name="size.width" onChange={onChange} type="text" placeholder="Name" />
                        <StyledInput name="size.height" onChange={onChange} type="text" placeholder="Value" />
                    </FotterBox>
                    <AddNewBox>
                        <Descripton>
                            <TextAre
                                type="text"
                                placeholder="You bior data here..."
                                onChange={onChange}
                                name="description"
                            ></TextAre>
                        </Descripton>
                        {state.colors && state.colors.map((e, i) => <New>
                            <ImageFotter type={"file"} ref={e => colorPreview.current = e} name="image" id="image-upload" />
                            <InputButton onClick={onUploadColorPreview} >Upload</InputButton>
                            <InputNew type="text" placeholder="Narx" />
                            <InputNew type="text" placeholder="Color" />
                            <ColorDiv />
                            <Delit onClick={() => onDeleteColor(i)}>
                                <i class="bx bx-x"></i>
                                Delete
                            </Delit>
                        </New>)}
                        <FooterIneer>
                            <ADDNEW onClick={onAddColor}>
                                <i class="bx bx-plus"></i>
                                Add New
                            </ADDNEW>
                        </FooterIneer>
                    </AddNewBox>
                </AddNewContainer>
            </Header>
        </Body>
    );
}
