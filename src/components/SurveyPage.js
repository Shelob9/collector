import {CalderaMailChimpSurveyForm} from '@calderajs/forms';
import React,{Fragment} from 'react';
export const SurveyPage = ({listId,apiRoot,token,onSubmit,Loading}) => {
    if( ! token){
        if( Loading ){
            return  <Loading/>
        }
        return  <Fragment />
    }
    return(
        <CalderaMailChimpSurveyForm
            token={token}
            apiRoot={apiRoot}
            listId={listId}
            onSubmit={onSubmit}
        />
    )
};
