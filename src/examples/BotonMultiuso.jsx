const BotonMultiuso = (props) => {

const styles = {
    backgroundColor:props.color,
    color:'black',
    border:'none',
    padding: props.padding,
    borderRadius: props.borderRadius,
    
}

    return(
       <button style={styles} onClick={props.onClickHandler}>Click!</button>
    )
}

export default BotonMultiuso