const inputTextCss = `/*====== Input text ======*/
.bepc-input-text{
  width: 600px;
  height: 40px;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  background-color: transparent;
  color: #313131;
  font-family: Figtree-Regular;
  font-size: 14px;
  padding: 10px;
  transition: all 0.1s ease-in;
}
.bepc-input-text:hover{
  border: 1px solid #809FB8;
}
.bepc-input-text:focus {
  border-color: #1F76C2;
  outline: none;
}

/*------ Input wrapper ------*/
.input-container {
  position: relative;
  display: inline-block;
}

.icon-container {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
}

/*------ Input text success ------*/
.bepc-input-text-success {
  width: 600px;
  height: 40px;
  border: 1px solid #00854D;
  border-radius: 4px;
  background-color: transparent;
  color: #313131;
  font-family: Figtree-Regular;
  font-size: 14px;
  padding: 10px;
  transition: all 0.1s ease-in;
}

.bepc-input-text-success:focus{
  border: 1px solid #00854D;
  outline: none;
}

.svg-success{
  color: #00854D;
}

/*------ Input text error ------*/
.bepc-input-text-error{
  width: 600px;
  height: 40px;
  border: 1px solid #D83A52;
  border-radius: 4px;
  background-color: transparent;
  color: #313131;
  font-family: Figtree-Regular;
  font-size: 14px;
  padding: 10px;
  transition: all 0.1s ease-in;
}
.svg-error{
  color: #D83A52;
}
.bepc-input-text-error:focus{
  border: 1px solid #D83A52;
  outline: none;
}
`;

export default inputTextCss;