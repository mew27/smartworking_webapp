import { Container, Typography, Paper } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { css } from '@emotion/react';

import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

function SWPicker() {
    return (
        <>
            <DateCalendar onChange={(newValue) => console.log(dayjs(newValue).format("DD-MM-YYYY"))} defaultValue={dayjs('22-11-2024', ["DD-MM-YYYY"])}></DateCalendar>
        </>
    )
}

export default SWPicker;