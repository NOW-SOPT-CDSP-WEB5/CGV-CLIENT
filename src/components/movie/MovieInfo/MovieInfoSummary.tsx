import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Typo from '../../../styles/typo/typo';
import getDetail from '../../../apis/getDetail';

function InfoSummary() {
	const [showSummary, setShowSummary] = useState(false);
	const [scripts, setScripts] = useState<string>('');

	const handleSummaryBtn = () => {
		setShowSummary(!showSummary);
	};

	const loadScriptData = async (movieId: number) => {
		const res = await getDetail(movieId);
		if (res) {
			setScripts(res.script);
		}
	};

	useEffect(() => {
		loadScriptData(3);
	}, []);

	return (
		<InfoSummaryContainer>
			<InfoSummaryWapper expanded={showSummary}>{scripts}</InfoSummaryWapper>
			<InfoSummaryBtn type="button" onClick={handleSummaryBtn}>
				<InfoSummaryBtnText>{showSummary ? '접기' : '자세히 보기'}</InfoSummaryBtnText>
			</InfoSummaryBtn>
		</InfoSummaryContainer>
	);
}

const InfoSummaryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// 타입스크립트에서 props를 정의합니다.
interface InfoSummaryWapperProps {
	expanded: boolean;
}

const InfoSummaryWapper = styled(Typo.Body.Body3M14)<InfoSummaryWapperProps>`
	display: -webkit-box;
	width: 33.5rem;
	max-height: ${({ expanded }) => (expanded ? 'none' : '4rem')};
	overflow: hidden;

	white-space: ${({ expanded }) => (expanded ? 'normal' : 'wrap')};
	text-overflow: ellipsis;
	-webkit-line-clamp: ${({ expanded }) => (expanded ? 'none' : '3')};
	-webkit-box-orient: vertical;
`;

const InfoSummaryBtn = styled.button`
	width: 33.5rem;
	height: 4.8rem;
	margin: 2rem 0;

	background-color: ${({ theme }) => theme.GreyScale.LG};
	border: none;
	border-radius: 0.6rem;
`;

const InfoSummaryBtnText = styled(Typo.Title.Title2SB15)`
	color: ${({ theme }) => theme.GreyScale.DG};
`;

export default InfoSummary;
