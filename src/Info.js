import logo from './logo.svg';
function Info (props){
     return (
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '50px'
        }}>
        <div style={{
            textAlign: 'center',
            alignItems: 'center',
            border: '1px solid black', 
            display: 'inline-block', 
            padding: '50px', 
            boxShadow: '0 0 20px #61dafb'
          }}>
        <img style={{  height:'40vmin'
}} src={logo} alt="logo" />
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.stuId}</h3>
        <h4>{props.stuName}</h4>
        <h5>{props.schoolName}</h5>
     
    </div>
    </div>
  );
}
export default Info