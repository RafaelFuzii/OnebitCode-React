export default function Input(pros){
    return(
        <input type="number" id="passwordSize" min={1} value={pros.passwordSize} onChange={(e) => pros.setPasswordSize(e.target.value)}/>
    )
}