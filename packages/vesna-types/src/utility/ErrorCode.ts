export enum ErrorCode {
  ResourceAccessDenied = 1,
  UserWireMissingRoleRelation = 100,
  UserCreationUsernameIsTaken = 200,
  UserCreationEmailIsTaken = 201,
  SessionLoginUserDoesNotExist = 300,
  SessionLoginAuthenticationError = 301,
  TaskLabelWireMissingTaskRelations = 400,
  TaskLabelDoesNotExist = 401,
  TaskDoesNotExist = 500,
}
