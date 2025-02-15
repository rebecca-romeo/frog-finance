import '../../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IndividualServicesInfo = () => {
  return (
    <section className="wrapper individual-services-container text-center font-quicksand">
      <div className='row'>
        <div className='col bg-lightblue rounded-md'>
          <h2 className="fontweight-700 font-poppins">Manage your money</h2>
          <p>With Frog Finance, managing your money is easy. </p>
          <p>Keep track of all the income you earn & every expense you make </p>
          <p>Select any month to view all your income and expenses</p>
        </div>
        <div className='col'>
        <h6 className='fontweight-700 font-poppins'> Income:</h6>
          <p>Add every income payment, date, and amount</p>

          <h6 className='fontweight-700 font-poppins'> Expenses:</h6>
          <p>Add all expenses, data, amount, and category</p>

        </div>
      </div>
      <div className='row'>
        <div className='col'>
        <h6 className='fontweight-700 font-poppins'> Budgets:</h6>
          <p>Make a monthly budget for every category of expenses</p>
          <p>View and update your budgets any time</p>

        </div>
        <div className='col bg-lightblue rounded-md'>
          <h2 className="fontweight-700 font-poppins">Create Monthly Budgets</h2>
          <p>Choose from a wide range of categories and set your budget each month</p>
          <p>Easily view your monthly progress to see how you're doing </p>
          <p>Update your budget amounts any time you need to  </p>
        </div>
      </div>
      <div className='row'>
        <div className='col bg-lightblue rounded-md'>
          <h2 className="fontweight-700 font-poppins">Set Savings Goals</h2>
          <p>Create a savings goal whenever you have a goal in mind</p>
          <p>Sit back and watch as your savings automatically update according to your income and expenses</p>
          <p>View all your past savings goals to keep track of your accomplishments</p>
        </div>
        <div className='col'>
        <h6 className='fontweight-700 font-poppins'> Savings:</h6>
          <p>Make a savings goal and work towards it</p>
          <p>View all the past goals you've reached</p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h6 className='fontweight-700 font-poppins'> Debt Goals:</h6>
          <p>Keep track of all your debts in one spot</p>
          <p>View all the debts you've paid off to keep track of your accomplishments</p>
        </div>
        <div className='col bg-lightblue rounded-md'>
          <h2 className="fontweight-700 font-poppins">Pay Down Debt</h2>
          <p>Leap out of debt with Frog Finance. Our debt goals help you visualize your debt, and allow you to watch your progress as you pay it down.</p>

          <p>Update your debt each time you make a payment and watch the progress bar automatically update</p>
        </div>
      </div>
    </section>
  );
};

export default IndividualServicesInfo;
