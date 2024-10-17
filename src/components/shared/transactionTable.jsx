import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const TransactionTable = ({ transactions }) => {
    return (
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
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
};

export default TransactionTable;