import {Button, FormControl, TextField, Typography} from "@mui/material";
import {useLang} from "../../components";

export const Search = () => {
    const lang = useLang();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submit");
    };

    return (
        <div>
            <Typography variant="h4">Search Page</Typography>
            <form action="#" onSubmit={handleSubmit}>
                <FormControl sx={{m: "1rem"}}>
                    <TextField id="name" label="name" variant="outlined"/>
                </FormControl>
                <br/>
                <Button
                    sx={{m: "1rem"}}
                    variant="contained"
                    size="large"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};
