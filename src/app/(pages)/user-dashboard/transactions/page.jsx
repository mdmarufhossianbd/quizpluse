import Transaction from "@/components/transactions/transactionTable";

const Transactions = () => {
    return (
        <div>
            <div className="my-5">
                <h2 className="text-3xl font-semibold text-center">Transaction Report</h2>
            </div>
            <Transaction />
        </div>
    );
};

export default Transactions;