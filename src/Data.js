export const Data = {
  "daily" : {
    work : {hour : "5", contents : "Yesterday - 7" },
    Play : {hour : "1", contents : "Yesterday - 2" },
    Study : {hour : "0", contents : "Yesterday - 1" },
    Exercise : {hour : "1", contents : "Yesterday - 1" },
    Social : {hour : "1", contents : "Yesterday - 3" },
    SelfCare : {hour : "0", contents : "Yesterday - 1" }
  },
  "weekly" : {
    work : {hour : "32", contents : "Last Week - 36"},
    Play : {hour : "10", contents : "Last Week - 8" },
    Study : {hour : "4", contents : "Last Week - 7" },
    Exercise : {hour : "4", contents : "Last Week - 5" },  //Json 적는 방법은 monthly가 아니라 위의 weekly와 daily방법임
    Social : {hour : "5", contents : "Last Week - 10" },    //배열[]써도 가능하지만, 배열을 사용할 때는 index번호를 적어야하기 때문에
    SelfCare : {hour : "2", contents : "Last Week - 2" }   //위의 쓰기 방식이 더 좋음
  },
  "monthly" : {
    work : {hour : "103", contents : "Last Month - 128" },
    Play : {hour : "23", contents : "Last Month - 29" },
    Study : {hour : "13", contents : "Last Month - 19" },
    Exercise : {hour : "11", contents : "Last Month - 18" },
    Social : {hour : "21", contents : "Last Month - 23" },
    SelfCare : {hour : "7", contents : "Last Month - 11" }
  }
} 