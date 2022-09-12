export interface API_DATA {
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: API_POST_DATA | API_USER_INFO | object
}

export interface API_POST_DATA {
    POST_AUTHOR: string,
    POST_DATE: string,
    POST_CONTENT: string,
    POST_IMAGE: string,
    POST_TITLE: string
}

export interface API_USER_INFO {
    USER_NAME: string,
    USER_EMAIL: string,
    USER_PHONE: string
}