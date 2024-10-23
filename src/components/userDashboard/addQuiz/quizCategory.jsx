import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";


const QuizCategory = ({ setFormData, quiz }) => {

    const handleSelectCategory = (value) => {
        setFormData((prev) => ({ ...prev, quizCategory: value }))
    }

    return (
        <div>
            <h4 className="block text-gray-700 text-sm font-bold mb-2">Select Quiz Category</h4>
            <Select defaultValue={quiz?.quizCategory} onValueChange={(value) => handleSelectCategory(value)}>
                <SelectTrigger className="">
                    <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Programming">Programming</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                    <SelectItem value="Movie">Movie</SelectItem>
                </SelectContent>
            </Select>
        </div>

    );
};

export default QuizCategory;