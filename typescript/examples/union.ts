


type ErrorResponse = {
    error: true;
    message: string;
}

type SuccessResponse = {
    error: false;
    data: string;
}

type ApiResponse = ErrorResponse | SuccessResponse;

function handleResponse(response: ApiResponse) {

    if (response.error) {
        console.log(response.message);
    } else {
        console.log(response.data);

    }
}


//region intersection type

type BaseProps = {
    id: string,
    className?: string,
}

type ButtonProps = BaseProps & {
    label: string;
    onClick: () => void;
}

type InputProps = BaseProps & {
    value: string;
    onChange: () => void;
    placeholder?: string
}


