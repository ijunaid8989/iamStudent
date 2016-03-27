onSignIn = ->
  $("#sign-me-in").on "click", ->
    username = $("#username").val()
    password = $("#password").val()
    if checkInputs(username, password) is false
      return
    else
      console.log "Hi"

checkInputs = (username, password) ->
  if $("#username").val() is ""
    $.notify 'Username is empty'
    false
  if $("#password").val() is ""
    $.notify 'Password is empty'
    false

window.initializeMain = ->
  onSignIn()
