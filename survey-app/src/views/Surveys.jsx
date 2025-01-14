import React from "react";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/contextProvider";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Surveys(){
    const { surveys } = useStateContext();
    console.log(surveys);
    const onDeleteClick = () => {
        console.log("on Delete click");
    }
    
    return (
        <>
            <PageComponent title="Survey"
                buttons={(
                    <TButton color="green" to="/surveys/create">
                        <PlusCircleIcon className="h-6 w-6 mr-2" /> 
                        Create New
                    </TButton>
                )}
            >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {surveys.map(survey => (
                        <SurveyListItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
                    ))}
                </div>
            </PageComponent>
        </>
    )
}