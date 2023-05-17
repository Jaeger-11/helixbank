const transactionlink = document.querySelector('.transaction');
const overviewlink = document.querySelector('.overview');
const settinglink = document.querySelector('.setting');
const transactioncontent = document.querySelector('.transactioncontent');
const overviewcontent = document.querySelector('.overviewcontent');
const settingcontent = document.querySelector('.settingcontent');

const links = [
    {
        tab: overviewlink,
        content: overviewcontent
    },
    {
        tab: transactionlink,
        content: transactioncontent
    },
    {
        tab: settinglink,
        content: settingcontent
    }
]

links.map((link) => {
    link.tab.addEventListener('click', () => {
        link.tab.classList.add('tabactive')
        link.content.classList.remove('hidden');
        let restLinks = links.filter((i) => i.tab !== link.tab)
        restLinks.map((i) => {
            i.content.classList.add('hidden')
            i.tab.classList.remove('tabactive')
        });
    })
})

// OVERVIEW TRANSACTIONS
const transactions = document.querySelector('.pasttransactions');

let transactionsData = [
    {
        accountname: "ricardo gonzalez",
        amount: 500,
        inflow: true
    },
    {
        accountname: "ricardo gonzalez",
        amount: 500,
        inflow: false
    },
    {
        accountname: "ricardo gonzalez",
        amount: 500,
        inflow: true
    },
    {
        accountname: "ricardo gonzalez",
        amount: 200,
        inflow: false
    },
    {
        accountname: "ricardo gonzalez",
        amount: 500,
        inflow: true
    },
]

const pushTransactions = (data) => {
    transactions.innerHTML = '';
    data.map((transaction) => {
        const { accountname, amount, inflow } = transaction;
        transactions.innerHTML += `
        <div class="pasttransaction">
            <p class="narration"> <span>from</span> <span class="narrationname semibold">ricardo gonzalez</span> </p>
            <p class="transactionamount mediumbold ${inflow ? 'green' : 'red'}">  ${inflow ? '+ ' + amount : '- ' + amount} USD</p>
            <div class="download pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 15C20.2652 15 20.5196 15.1054 20.7071 15.2929C20.8946 15.4804 21 15.7348 21 16V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V16C3 15.7348 3.10536 15.4804 3.29289 15.2929C3.48043 15.1054 3.73478 15 4 15C4.26522 15 4.51957 15.1054 4.70711 15.2929C4.89464 15.4804 5 15.7348 5 16V20H19V16C19 15.7348 19.1054 15.4804 19.2929 15.2929C19.4804 15.1054 19.7348 15 20 15ZM12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V13.243L15.536 10.707C15.6282 10.6115 15.7386 10.5353 15.8606 10.4829C15.9826 10.4305 16.1138 10.4029 16.2466 10.4017C16.3794 10.4006 16.5111 10.4259 16.634 10.4762C16.7568 10.5265 16.8685 10.6007 16.9624 10.6946C17.0563 10.7885 17.1305 10.9001 17.1808 11.023C17.2311 11.1459 17.2564 11.2776 17.2553 11.4104C17.2541 11.5432 17.2265 11.6744 17.1741 11.7964C17.1217 11.9184 17.0455 12.0288 16.95 12.121L12.884 16.187C12.7679 16.3031 12.6301 16.3952 12.4784 16.4581C12.3268 16.5209 12.1642 16.5532 12 16.5532C11.8358 16.5532 11.6732 16.5209 11.5216 16.4581C11.3699 16.3952 11.2321 16.3031 11.116 16.187L7.05 12.121C6.95449 12.0288 6.87831 11.9184 6.8259 11.7964C6.77349 11.6744 6.7459 11.5432 6.74475 11.4104C6.7436 11.2776 6.7689 11.1459 6.81918 11.023C6.86946 10.9001 6.94371 10.7885 7.0376 10.6946C7.1315 10.6007 7.24315 10.5265 7.36605 10.4762C7.48894 10.4259 7.62062 10.4006 7.7534 10.4017C7.88618 10.4029 8.0174 10.4305 8.1394 10.4829C8.26141 10.5353 8.37175 10.6115 8.464 10.707L11 13.243V3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2Z" fill="#578CFF"/>
                </svg>
            </div>
        </div>
        `
    })
}

pushTransactions(transactionsData)