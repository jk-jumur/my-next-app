

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return (
        <div>
            <h2 className="text-red-500">users are coming.....</h2>
            <div className="grid grid-cols-3 gap-3">
                 {
                    users.map(user => <div key={user.id}   className="card bg-primary  text-primary-content ">
         <div className="card-body">
        <h2 className="card-title">Card title!</h2>
       <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
       <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
       </div>
      </div>
         </div>)
                 }
            </div>
        </div>
    );
};

export default UsersPage;