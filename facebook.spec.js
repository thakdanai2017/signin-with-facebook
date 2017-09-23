function Auth(facebook) {
  this.signInWithFacebook = (phone,password)=>{
    let value = facebook(phone, password)
    return value
  }
}

test('Mock with 1 should return 1',() =>{
const mockFn =jest.fn()
  .mockReturnValue(1)

  expect(mockFn()).toBe(1)
})
test('Sign in with Facebook valid credential' , () =>{

  let phone = '12345'
  let password = '54321'
  const facebook = jest.fn(phone, password)
    .mockReturnValue({name:"Thakdanai", facebookId: '123456789',email:"58160021@gmail.com"})
    let app = new Auth(facebook)
  let obj = app.signInWithFacebook(phone, password)
  expect(facebook).toBeCalled()
  expect(obj).toEqual({name: "Thakdanai" , facebookId: '123456789',email:"58160021@gmail.com"})
})
