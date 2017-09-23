function Auth(authService) {
    this.authService = authService

    this.signInWithFacebook = (phone, password) => {
        return this.authService(phone, password)
    }
}

test('Mock with 1 should return 1',() =>{
const mockFn =jest.fn(1)
  .mockReturnValue(1)

  expect(mockFn(1)).toBe(1)
  expect(mockFn).toBeCalledWith(1)
})
test('Sign in with Facebook valid credential should pass' , () =>{
  const returnObject = {
    name: 'thakdanai',
    facebookId: '11223344',
    email: 'thakdanai@gg.com'
  }

  const mockFacebook = jest.fn('081777555' , 'asd123')
    .mockReturnValue(returnObject)

  let app = new Auth(mockFacebook)
  let value = app.signInWithFacebook('081777555' , 'asd123')

  expect(value).toEqual(returnObject)
  expect(mockFacebook).toBeCalled()
  expect(mockFacebook).toBeCalledWith('081777555' , 'asd123')
  
  
  
  // let phone = '12345'
  // let password = '54321'
  // const facebook = jest.fn(phone, password)
  //   .mockReturnValue({name:"Thakdanai", facebookId: '123456789',email:"58160021@gmail.com"})
  //   let app = new Auth(facebook)
  // let obj = app.signInWithFacebook(phone, password)
  // expect(facebook).toBeCalled()
  // expect(obj).toEqual({name: "Thakdanai" , facebookId: '123456789',email:"58160021@gmail.com"})
})
