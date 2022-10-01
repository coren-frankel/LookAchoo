export default function LocName(sniff) {
    if(sniff.city == sniff.country && !sniff.region){
        return sniff.country
    } else if(sniff.city == sniff.country && sniff.city == sniff.region){
        return sniff.country
    } else {
        return(
            <>
            {sniff.city != sniff.region && sniff.city ? sniff.city : sniff.region}
            {!sniff.city && !sniff.region ? "" : ","} {sniff.region && sniff.city !== sniff.region && sniff.city ? sniff.region : sniff.country}
            </>
        )
    }
}
