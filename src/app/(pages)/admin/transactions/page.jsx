import Transactions from "@/components/admin/transactions/transactions";

const Transaction = () => {

    return (
        <div>
            <div className="my-5">
                <h2 className="text-3xl font-semibold text-center">All Transaction Reports</h2>
            </div>
            <Transactions />
        </div>
    );
};

export default Transaction;