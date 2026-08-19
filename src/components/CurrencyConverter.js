import React, { useState } from "react";

const currencies = [
  ["USD", "US Dollar"],
  ["EUR", "Euro"],
  ["GBP", "British Pound"],
  ["INR", "Indian Rupee"],
  ["JPY", "Japanese Yen"],
  ["AUD", "Australian Dollar"],
  ["CAD", "Canadian Dollar"],
  ["SGD", "Singapore Dollar"],
  ["AED", "UAE Dirham"],
];

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [rate, setRate] = useState(null);
  const [updatedAt, setUpdatedAt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const convertCurrency = async (event) => {
    event.preventDefault();
    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount < 0) {
      setError("Enter an amount greater than zero.");
      return;
    }

    if (fromCurrency === toCurrency) {
      setConvertedAmount(numericAmount.toFixed(2));
      setRate(1);
      setUpdatedAt(new Date().toLocaleTimeString());
      setError("");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${fromCurrency}`,
      );
      if (!response.ok) throw new Error("Currency service unavailable");

      const data = await response.json();
      const exchangeRate = data?.rates?.[toCurrency];
      if (!exchangeRate) throw new Error("Currency rate unavailable");

      setConvertedAmount((numericAmount * exchangeRate).toFixed(2));
      setRate(exchangeRate.toFixed(6));
      setUpdatedAt(
        data.time_last_update_unix
          ? new Date(data.time_last_update_unix * 1000).toLocaleTimeString()
          : new Date().toLocaleTimeString(),
      );
    } catch (conversionError) {
      setError("Unable to fetch the latest rate. Please try again.");
      setConvertedAmount("");
      setRate(null);
    } finally {
      setLoading(false);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount("");
    setRate(null);
  };

  return (
    <main className="container-fluid realtimecomp currencycomp">
      <div className="text-center tool-page-intro">
        <h1 className="card-head">Currency Converter</h1>
        <p>Convert money using the latest available exchange rate.</p>
      </div>

      <form className="currency-panel" onSubmit={convertCurrency}>
        <div className="currency-fields">
          <div>
            <label htmlFor="currencyAmount">Amount</label>
            <input
              id="currencyAmount"
              type="number"
              min="0"
              step="any"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="fromCurrency">From</label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={(event) => setFromCurrency(event.target.value)}
              className="form-select"
            >
              {currencies.map(([code, name]) => (
                <option key={code} value={code}>
                  {code} - {name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="currency-swap"
            onClick={swapCurrencies}
            aria-label="Swap currencies"
            title="Swap currencies"
          >
            <i className="fa-solid fa-arrow-right-arrow-left" />
          </button>
          <div>
            <label htmlFor="toCurrency">To</label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={(event) => setToCurrency(event.target.value)}
              className="form-select"
            >
              {currencies.map(([code, name]) => (
                <option key={code} value={code}>
                  {code} - {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="download-btn currency-submit"
          disabled={loading}
        >
          {loading ? "Fetching rate..." : "Convert currency"}
        </button>

        {error && <p className="error-message">{error}</p>}

        {convertedAmount && (
          <div className="currency-result" aria-live="polite">
            <span>
              {amount} {fromCurrency} equals
            </span>
            <strong>
              {convertedAmount} {toCurrency}
            </strong>
            <small>
              1 {fromCurrency} = {rate} {toCurrency} · Updated {updatedAt}
            </small>
          </div>
        )}
      </form>
    </main>
  );
};

export default CurrencyConverter;
