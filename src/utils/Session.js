const LOGIN_COOKIE_NAME = 'sessionId'

let isAuthenticated = ()=>{
    return _getCookie(LOGIN_COOKIE_NAME)
}

let authenticateSuccess = (token)=>{
    _setCookie(LOGIN_COOKIE_NAME, token)
}

let logout = ()=> {
  _setCookie(LOGIN_COOKIE_NAME, '', 0)
}

let _getCookie = (name)=> {
  let start, end
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      }
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}

let _setCookie = (name, value, expire)=> {
  let date = new Date()
  date.setDate(date.getDate() + expire)
  document.cookie = name + '=' + escape(value) + '; path=/' +
    (expire ? ';expires=' + date.toGMTString() : '')
}

export{
    isAuthenticated,
    authenticateSuccess,
    logout
}