import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const CTAButton = styled(Button)`
  width: 372px;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 5px;
	background: #6687e7 !important;
  color: white !important;
  font-size: 28px !important;
  font-weight: bold !important;
  font-family: "Open Sans", sans-serif !important;
  @media screen and (max-width: 420px){
    font-size: 21px !important;
  }
`; // add your own styles here

const StakeButton = () => {

  return (
		<div style={{display: 'flex', justifyContent: 'center'}}>
			<Paper
				style={{ padding: 12, backgroundColor: '#6687e7', borderRadius: 15 }}
			>
				<CTAButton onClick={() => window.open(`https://staking.funguyz.io/`)}>
					Stake
				</CTAButton>
			</Paper>
		</div>
  );
};

export default StakeButton;