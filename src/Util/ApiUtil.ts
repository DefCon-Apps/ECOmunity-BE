export interface API_DATA {
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: API_USER_IMAGE | API_USER_INFO | object
}

export interface API_USER_INFO {
    USER_NAME: string,
    USER_EMAIL: string,
    USER_PHONE: string
}

export interface API_USER_IMAGE {
    USER_IMAGE_URL: string
}