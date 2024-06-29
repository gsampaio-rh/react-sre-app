import ruleData from '../assets/data/rule_impacting.json';

const checkSpecificRule = () => {
    const ruleToRoomMapping = {
        "hardening_logging_auditd|HARDENING_LOGGING_5_AUDITD": "Sala Verde",
        "hardening_ssh_hmac_cipher|OPENSSH_HARDENING_HMAC_CIPHER_2_SOME_PARSERS_UNAVAILABLE": "Sala Azul"
    };

    const foundRooms = [];

    for (const [ruleId, room] of Object.entries(ruleToRoomMapping)) {
        const specificRule = ruleData.data.find(rule => rule.rule_id === ruleId);
        if (specificRule) {
            console.log(`The rule "${ruleId}" is found.`);
            foundRooms.push(room);
        } else {
            console.log(`The rule "${ruleId}" is not found.`);
        }
    }

    return foundRooms.length > 0 ? foundRooms : null;
};

export default checkSpecificRule;
