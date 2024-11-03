'use client'

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import Pagination from "../shared/pagination";
import TransactionTable from "../shared/transactionTable";
import DataLoader from "../shared/dataLoader/dataLoader";

const Transaction = () => {
    const { data } = useSession();
    const email = data?.user?.email;
    const [page, setPage] = useState(1);
    const [transactions, setTransactions] = useState([])
    const [totalTransactions, setTotalTransactions] = useState()
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getTransactions = async () => {
            setLoading(true)
            await axios.get(`/api/v1/payment/payment-info?email=${email}&page=${page}`)
                .then(res => {
                    if (res.data?.success) {
                        setTransactions(res.data?.result)
                        setPage(res.data?.currentPage);
                        setTotalPages(res.data?.totalPages)
                        setTotalTransactions(res.data?.totalPayments)
                        setLoading(false)
                    }
                })
        }
        getTransactions()
    }, [email, page])

    return (
        <>
            <div className="border rounded-md">
                <TransactionTable transactions={transactions} />
                {loading && (
                    <div className="flex justify-center items-center w-full mt-5">
                        <DataLoader />
                    </div>
                )}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
    );
};

export default Transaction;