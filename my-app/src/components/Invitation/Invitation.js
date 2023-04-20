import './Invitation.css'
export default function Invitation(props) {
    let peoples = props.invitationData.peoples;
    let textcolor = props.invitationData.color;
    //console.log(color);
    return (
        <>

            <div className="content">
                <h1 className="heading">INVITATION FOR BIRTHDAY PARTY</h1>
                <p><b>Subject :</b> <span style={{ color: textcolor, fontWeight: 650 }}>{' '}{props.invitationData.subject}</span></p>
                <p><b>To :</b><span style={{ color: textcolor, fontWeight: 650 }}> {' '}{props.invitationData.email}</span></p>
                <p><b>Hi,</b> <span style={{ color: textcolor, fontWeight: 650 }}>jaGdish</span></p>
                <p>I am having a birthday party next Friday at my Home .
                    Would you like to come ? It will be fun . Lots of people from my school are coming .
                    you know some of them - {peoples.map((people, index) => <span style={{ color: textcolor, fontWeight: 650 }} key={index}>{people}{' '}</span>)}.
                    My house is behind our school , near <span style={{ color: textcolor, fontWeight: 650 }}>{props.invitationData.address}</span> .
                    I hope you will come and see you soon .
                </p>
                <p>
                    <b>from ,</b>
                    <span style={{ color: textcolor, fontWeight: 650 }}>{' '}{props.invitationData.name}</span>
                </p>
            </div>
        </>
    )
}