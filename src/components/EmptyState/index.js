import { EmptyStateWrapper } from "./styles";
import icon from "../../assets/icons/empty-state.svg";

function EmptyState(){
    return(
        <EmptyStateWrapper>
            <EmptyStateWrapper.Image  alt="" src={icon}/>
            <EmptyStateWrapper.Text>
                Nada para ver por aqui :)
            </EmptyStateWrapper.Text>
        </EmptyStateWrapper>
    )
}

export default EmptyState;