import Login from "./Login";
import Profile from "./Profile";


function CustomerLoin() {
  return (
    <section id="Customer">
      <h1 className="text-center text-light bg-dark p-3 mt-5"><i className="bi bi-box-arrow-in-right text-info"></i> Customer Login </h1>
      <div className="text-center ">
        <Profile />
        <Login />
      </div>
    </section>
  );
}

export default CustomerLoin;
