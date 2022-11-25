import "./container.css";

export const Container = (props) =>{
    return (
        <div className={`page-container ${props.fluid ? 'fluid-container':''}`}>
            {props.children}
        </div>
    )
}