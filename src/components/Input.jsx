const Input = ({ input, onHandleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">INITIAL INVESTMENT</label>
          <input
            type="number"
            name="initialInvestment"
            value={input.initialInvestment}
            onChange={onHandleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="">ANNUAL INVESTMENT</label>
          <input
            type="number"
            name="annualInvestment"
            value={input.annualInvestment}
            onChange={onHandleChange}
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="">EXPECTED RETURN</label>
          <input
            type="number"
            name="expectedReturn"
            value={input.expectedReturn}
            onChange={onHandleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="">DURATION</label>
          <input
            type="number"
            name="duration"
            value={input.duration}
            onChange={onHandleChange}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default Input;
