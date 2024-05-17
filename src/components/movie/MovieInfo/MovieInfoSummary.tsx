import styled from 'styled-components';
import { useState } from 'react';
import Typo from '../../../styles/typo/typo';

function InfoSummary() {
	const [showSummary, setShowSummary] = useState(false);

	const handleSummaryBtn = () => {
		setShowSummary(!showSummary);
	};

	return (
		<InfoSummaryContainer>
			<InfoSummaryWapper expanded={showSummary}>
				신종 마약 사건 3년 뒤, 괴물형사 ‘마석도’(마동석)와 서울 광수대는 배달앱을 이용한 마약 판매 사건을 수사하던 중{' '}
				<br />
				수배 중인 앱 개발자가 필리핀에서 사망한 사건이 대규모 온라인 불법 도박 조직과 연관되어 있음을 알아낸다. <br />
				<br />
				필리핀에 거점을 두고 납치, 감금, 폭행, 살인 등으로 대한민국 온라인 불법 도박 시장을 장악한 특수부대 용병 출신의
				빌런 ‘백창기’(김무열)와 한국에서 더 큰 판을 짜고 있는 IT업계 천재 CEO ‘장동철’(이동휘). ‘마석도’는 더 커진 판을
				잡기 위해 ‘장이수’(박지환)에게 뜻밖의 협력을 제안하고 광역수사대는 물론, 사이버수사대까지 합류해 범죄를 소탕하기
				시작하는데… <br />
				<br />
				나쁜 놈 잡는데 국경도 영역도 제한 없다! 업그레이드 소탕 작전! 거침없이 싹 쓸어버린다!
			</InfoSummaryWapper>
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
