'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Pagination from "../shared/pagination";

const TransactionTable = () => {
    const { data } = useSession();
    const email = data?.user?.email;
    const [page, setPage] = useState(1);
    const [transactions, setTransactions] = useState([])
    const [totalTransactions, setTotalTransactions] = useState()
    const [totalPages, setTotalPages] = useState(1)


    useEffect(() => {
        const getTransactions = async () => {
            await axios.get(`/api/v1/payment/payment-info?email=${email}&page=${page}`)
                .then(res => {
                    if (res.data?.success) {
                        setTransactions(res.data?.result)
                        setPage(res.data?.currentPage);
                        setTotalPages(res.data?.totalPages)
                        setTotalTransactions(res.data?.totalPayments)
                    }
                })
        }
        getTransactions()
    }, [email, page])

    return (
        <>
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Invoice ID</TableHead>
                            <TableHead className="">Purchase Date</TableHead>
                            <TableHead>Package Name</TableHead>
                            <TableHead className="">Amount</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead>Card</TableHead>
                            <TableHead className='text-center'>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            transactions?.map((item, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{item.transactionId}</TableCell>
                                    <TableCell>{new Date(item.paymentTime).toLocaleString()}</TableCell>
                                    <TableCell>{item.packageTitle}</TableCell>
                                    <TableCell>${item.price}</TableCell>
                                    <TableCell>Card</TableCell>
                                    <TableCell>{item.cardDetails?.brand}</TableCell>
                                    <TableCell className='text-center'>
                                        {item.status === 'succeeded' ? <span className="bg-[#d1f4e0] px-3 py-1 rounded-full font-semibold text-[#26c56b]">
                                            Success
                                        </span> : <span className="bg-[#fdd0df] px-3 py-1 rounded-full font-semibold text-[#d65a83]">
                                            Success
                                        </span>}
                                        {/* <span className="bg-[#d1f4e0] px-3 py-1 rounded-full font-semibold text-[#26c56b]">
                                        Success
                                    </span> */}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
    );
};

export default TransactionTable;