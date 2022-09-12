export interface API_DATA {
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: API_POST_DATA | API_POST_LIST | API_USER_INFO | object
}

export interface API_POST_DATA {
    POST_AUTHOR: string,
    POST_DATE: string,
    POST_CONTENT: string,
    POST_IMAGE: string,
    POST_RECOMMEND: number,
    POST_TITLE: string
}

export interface API_POST_LIST {
    POST_COUNT: number,
    POST_IS_NOTICE: boolean,
    POST_LIST: Array<API_POST_LIST_ITEM>
}

export interface API_POST_LIST_ITEM {
    POST_AUTHOR: string,
    POST_DATE: string,
    POST_ID: string,
    POST_RECOMMEND: number,
    POST_TITLE: string
}

export interface API_USER_INFO {
    USER_NAME: string,
    USER_EMAIL: string,
    USER_PHONE: string
}