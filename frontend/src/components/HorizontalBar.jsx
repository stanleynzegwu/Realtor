
const HorizontalBar = ({bgColor,percentage}) => {
  return ( 
    <div style={{width:'70%',backgroundColor: "#e0e0de", borderRadius: '5px',height:'15px',overflow: 'hidden'}}>
      <div style={{height:'100%',width:`${percentage}`,backgroundColor: `${bgColor}`,borderRadius: 'inherit',}}>
      </div>
    </div>
   );
}
 
export default HorizontalBar;