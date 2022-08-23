import { Typography } from '@mui/material';
import ReportList from './ReportList'
import './styles/workreports.css';
const PendingWorkMember = () => {
    return (
        <>
            <div className="pendingwork">
                <div className="cardpending">
                    <Typography variant="h3" component="h4" className="" >
                        Pending Work Reports
                    </Typography>
                    <Typography variant="h2" component="h2" className="" >
                       1
                    </Typography>
                </div>
                <div className="summarywork">
                    <ReportList /> </div>
            </div>
        </>
    );
};

export default PendingWorkMember;
