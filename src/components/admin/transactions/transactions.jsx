'use client'
import Pagination from "@/components/shared/pagination";
import TransactionTable from "@/components/shared/transactionTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalTransactions, setTotalTransactions] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const allTransactions = async () => {
            setLoading(true)
            await axios.get(`/api/v1/payment/payment-info?page=${page}`)
                .then(res => {
                    if (res.data.success) {
                        setTransactions(res.data?.result)
                        setPage(res.data?.currentPage)
                        setTotalPages(res.data?.totalPages)
                        setTotalTransactions(res.data?.totalPayments)
                        setLoading(false)
                    }
                    setLoading(false)
                })
        }
        allTransactions()
    }, [page])

    return (
        <>
            <div className="border rounded-md">
                <TransactionTable transactions={transactions} />
                {
                    loading && <div className="flex items-center justify-center w-full my-10">
                        <ImSpinner9 size={50} className="animate-spin" />
                    </div>
                }
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
    );
};

export default Transactions;