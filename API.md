## 1인개발자 LR의 IT블로그 API 가이드

### Base URL

```
https://eco-api.defcon.or.kr
```

### API Functions Summary

| Function         | Description                       | Parameters              | Type    |
|------------------|-----------------------------------|-------------------------|---------|
| /getPost         | Get Specific Post Data            | PostID, PostType        | Board   |
| /getPostList     | Get Post List of Board or Notice  | PostID, PostType, SrcID | Board   |
| /updatePost      | Update Specific Post Data         | PostType                | Board   |
| /deletePost      | Delete Specific Post              | PostID, PostType, SrcID | Board   |
| /updateRecommend | Update Recommend of Specific Post | PostType                | Board   |
| /addUserInfo     | Add New User Data                 | PostID, PostType        | Profile |
| /getUserInfo     | Get Specific User Data            | PostID, PostType, SrcID | Profile |
| /updateUserInfo  | Update Specific User Data         | PostType                | Profile |

## Common Description

### Parameter / Variable

| Variable                  | Type    | Description                                       | Example                        |
|---------------------------|---------|---------------------------------------------------|--------------------------------|
| USER_UID                  | String  | UID of Specific User                              | N/A                            |
| USER_TOKEN                | String  | Session Token of Specific User from Firebase      | N/A                            |
| POST_ID                   | String  | ID Value of Specific Post                         | 00026                          |
| POST_IS_NOTICE            | Boolean | Post is Notice or Not                             | true is Notice, false is Board |
| POST_RECOMMEND            | Number  | Recommendation Count of Specific Post             | 5                              |
| POST_DATA                 | Object  | Post Data Object for Add or Update Post           | N/A                            |
| POST_DATA["POST_AUTHOR"]  | String  | Author of Post                                    | N/A                            |
| POST_DATA["POST_CONTENT"] | String  | Content of Post                                   | N/A                            |
| POST_DATA["POST_DATE"]    | String  | Date of Post                                      | N/A                            |
| POST_DATA["POST_IMAGE"]   | String  | Base64 Encoded Data of Image on Post              | N/A                            |
| POST_DATA["POST_TITLE"]   | String  | Title of Post                                     | N/A                            |
| USER_INFO                 | Object  | Post Data Object for Add or Update Post           | N/A                            |
| USER_INFO["USER_EMAIL"]   | String  | Email of User                                     | N/A                            |
| USER_INFO["USER_NAME"]    | String  | Name of User                                      | N/A                            |
| USER_INFO["USER_PHONE"]   | String  | Phone Number of User                              | N/A                            |
| USER_INFO["USER_POINT"]   | String  | ECO Point of User                                 | N/A                            |
| USER_INFO["USER_POSTS"]   | Array   | List of Post ID / IS_NOTICE that User has Written | N/A                            |

### Result Values

| Variable | Type | Description               |
|---|---|---------------------------|
| RESULT_CODE | Integer | 200 is OK, Other is Error |
| RESULT_MSG | String | Message for Result Check  |
| RESULT_DATA | Object | Values of API Function    |


## Detail Description

### /getPost

Input Body
```json
{
  "USER_UID": USER_UID,
  "USER_TOKEM": USER_TOKEN,
  
  "POST_ID": POST_ID,
  "POST_IS_NOTICE": true | false
}
```

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {
      "POST_AUTHOR": POST_AUTHOR,
      "POST_CONTENT": POST_CONTENT,
      "POST_DATE": POST_DATE,
      "POST_IMAGE": POST_IMAGE,
      "POST_TITLE": POST_TITLE
    }
}
```

---

### /getPostList

Input Body
```json
{
  "USER_UID": USER_UID,
  "USER_TOKEM": USER_TOKEN,

  "POST_IS_NOTICE": true | false
}
```

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": [
      {
        "POST_AUTHOR": POST_AUTHOR,
        "POST_DATE": POST_DATE,
        "POST_IMAGE": POST_IMAGE,
        "POST_RECOMMEND": POST_RECOMMEND,
        "POST_TITLE": POST_TITLE
      }
    ]
}
```

---

### /updatePost

Input Body

```json
{
  "USER_UID": USER_UID,
  "USER_TOKEM": USER_TOKEN,
  "POST_ID": POST_ID,
  "POST_IS_NOTICE": true | false,
  "POST_DATA": {
    "POST_AUTHOR": POST_AUTHOR,
    "POST_CONTENT": POST_CONTENT,
    "POST_DATE": POST_DATE,
    "POST_IMAGE": POST_IMAGE,
    "POST_TITLE": POST_TITLE
  }
}
```

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {}
}
```

### /deletePost

Input Body
```json
{
  "USER_UID": USER_UID,
  "USER_TOKEM": USER_TOKEN,
  
  "POST_ID": POST_ID,
  "POST_IS_NOTICE": true | false
}
```

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {}
}
```

---

### /updateRecommend

Input Body
```json
{
  "USER_UID": USER_UID,
  "USER_TOKEM": USER_TOKEN,
  
  "POST_ID": POST_ID,
  "POST_IS_NOTICE": true | false,
  "POST_RECOMMEND": POST_RECOMMEND
}
```

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {}
}
```

---

### /addUserInfo

Input Body
```json
{
  "USER_UID": USER_UID,
  "USER_TOKEM": USER_TOKEN,
  
  "USER_INFO": {
    "USER_EMAIL": USER_EMAIL,
    "USER_NAME": USER_NAME,
    "USER_PHONE": USER_PHONE,
    "USER_POINT": USER_POINT,
    "USER_POSTS": [
      {
        "POST_ID": POST_ID,
        "POST_IS_NOTICE": POST_IS_NOTICE
      }
    ]
  }
}
```

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {}
}
```

---

### /getUserInfo

Input Body
```json
{
  "USER_UID": USER_UID,
  "USER_TOKEM": USER_TOKEN
}
```

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {
      "USER_EMAIL": USER_EMAIL,
      "USER_NAME": USER_NAME,
      "USER_PHONE": USER_PHONE,
      "USER_POINT": USER_POINT,
      "USER_POSTS": [
        {
          "POST_ID": POST_ID,
          "POST_IS_NOTICE": POST_IS_NOTICE
        }
      ]
    }
}
```

---

### /updateUserInfo

Input Body
```json
{
  "USER_UID": USER_UID,
  "USER_TOKEM": USER_TOKEN,
  
  "USER_INFO": {
    "USER_EMAIL": USER_EMAIL,
    "USER_NAME": USER_NAME,
    "USER_PHONE": USER_PHONE,
    "USER_POINT": USER_POINT,
    "USER_POSTS": [
      {
        "POST_ID": POST_ID,
        "POST_IS_NOTICE": POST_IS_NOTICE
      }
    ]
  }
}
```

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {}
}
```

---