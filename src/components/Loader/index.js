import { LoaderWrapper, LoaderText } from "./styles";
import Loader from "react-loader-spinner";

function LoaderSpinner(props) {
    if (props.visible) {

        return (
            <LoaderWrapper>

                <Loader
                    type="Watch"
                    color="#ED6A5A"
                    height={100}
                    width={100}
                    visible={props.visible}
                />

                <LoaderText>{props.text}</LoaderText>

            </LoaderWrapper>
        )
    } else return null
}

export default LoaderSpinner;