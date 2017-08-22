// Validation regex constants for a model

const USERNAME_MATCH_PATTERN = /^[a-zA-Z0-9 ]{3,30}$/g;
const USER_PASSWORD_MATCH_PATTERN = /^[a-zA-Z0-9 ]{3,30}$/g;
const USER_EMAIL_MATCH_PATTERN =
  /^[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/g;
const USER_PROFILE_PICTURE_MATCH_PATTERN =
  /^(\w*\.jpg\b)|(\w*\.JPG\b)|(\w*\.png\b)|(\w*\.PNG\b)|(\w*\.bmp\b)$/g;

module.exports = {
  USERNAME_MATCH_PATTERN: USERNAME_MATCH_PATTERN,
  USER_PASSWORD_MATCH_PATTERN: USER_PASSWORD_MATCH_PATTERN,
  USER_EMAIL_MATCH_PATTERN: USER_EMAIL_MATCH_PATTERN,
  USER_PROFILE_PICTURE_MATCH_PATTERN: USER_PROFILE_PICTURE_MATCH_PATTERN,
};
