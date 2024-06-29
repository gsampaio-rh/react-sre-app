import ruleData from '../assets/data/rule_impacting.json';

const checkSpecificRule = () => {
    const ruleToRoomMapping = {
        "hardening_logging_auditd|HARDENING_LOGGING_5_AUDITD": "Sala Verde"
    };

    const specificRuleId = "hardening_logging_auditd|HARDENING_LOGGING_5_AUDITD";
    const specificRule = ruleData.data.find(rule => rule.rule_id === specificRuleId);

    if (specificRule) {
        console.log(`The rule "${specificRuleId}" is found.`);
        return ruleToRoomMapping[specificRuleId];
    } else {
        console.log(`The rule "${specificRuleId}" is not found.`);
        return null;
    }
};

export default checkSpecificRule;
