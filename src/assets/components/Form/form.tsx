import "./form.css"
const Form = () => {
     return <>
          <div className="form-container">
               <form action="
               ">
                    <input type="text" placeholder="Nome Completo" />
                    <label htmlFor="data">Data de nascimento</label>
                    <input type= "date"/>
                    <input type="text" placeholder="Comida Favorita"/>
                    <input type="submit" />
               </form>
          </div>
     </>
}
export default Form