import '../App.css'

export default function General({firstName, lastName, email, phoneNumber, handleChange}) {
    return (
        <>
        <h2>General Information</h2>
        <form className="card">
            <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" placeholder="First Name" value={firstName} onChange={handleChange}></input>
            </div>

            <div>
                <label htmlFor="lastName" >Last Name</label>
                <input id="lastName" placeholder="Last Name" value={lastName} onChange={handleChange}></input>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <br/>
                <input id="email" type="email" placeholder="Email" value={email} onChange={handleChange}></input>
            </div>

            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" type="tel" placeholder="Phone Number" value={phoneNumber} onChange={handleChange}></input>
            </div>
       </form>
       </>
    )
}