import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

const CommentForm = () => {
    const {register, handleSubmit, formState:{errors, isValid}, setValue} = useForm({mode:'onBlur', resolver:joiResolver()});
    return (
        <from>
            CommentForm
        </from>
    );
};

export {CommentForm};